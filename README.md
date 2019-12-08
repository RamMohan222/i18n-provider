# I18n-Provider

I18n-Provider with react hooks api.

1. Following code is the implementation of `i18n-provider` implementation.

```jsx
const I18nProviderContext = React.createContext([
  { locale: "", getLabel: () => "" },
  () => {}
]);

const withProps = (extProps = {}) => WrappedComponent => props => (
  <WrappedComponent {...props} {...extProps} />
);

const useI18n = () => {
  const [i18n, setLocale] = useContext(I18nProviderContext);
  return [i18n, setLocale];
};

const WithI18n = WrappedComponent => {
  const [i18n, setLocale] = useContext(I18nProviderContext);
  return withProps({ i18n, setLocale })(WrappedComponent);
};
// By following hook-rules we can able to call hooks from either custom hooks or Functional components.
// 1. Custom hook name should start with use
// 2. Functional hook name should start with Capital latter
// Converting the Functional component name to HOC to use i18n-provider with class based components.
const withI18n = WithI18n;

const I18nProvider = ({ labels: messages = {}, defaultLocale, children }) => {
  // labels should be an object with key values pair
  const labels = Object.keys(messages).length ? messages : {};
  const locale = localStorage.getItem("locale") || defaultLocale;
  const [state, setState] = useState({ locale, labels });

  const setLocale = locale => {
    if (locale) {
      localStorage.setItem("locale", locale);
      setState({ ...state, locale });
    }
  };

  const getLabel = (key, defaultLabel) => {
    const { locale, labels } = state;
    return (
      (labels[locale] && labels[locale][key]) || defaultLabel || "key not found"
    );
  };

  const i18n = { locale: state.locale, getLabel };
  return (
    <I18nProviderContext.Provider value={[i18n, setLocale]}>
      {children}
    </I18nProviderContext.Provider>
  );
};
```

2. The follow code will show you how to use it.

```jsx
import en from "./i18n/en.json";
import fe from "./i18n/fe.json";
import { I18nProvider } from "./components/i18n-provider";

const labels = { en, fe };
const MainApp = () => (
  <I18nProvider labels={labels} defaultLocale="en">
    <App />
  </I18nProvider>
);
```
3. Following code will show you how to access label and setLocal 

```jsx
import { useI18n } from "../../components/i18n-provider";

const App = () => {
const [i18n, setLocale] = useI18n();

return <h3>{i18n.getLabel('key','Default Label')}</h3>
}
```




