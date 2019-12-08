import React, { useState, useContext } from "react";

const I18nProviderContext = React.createContext([
  { locale: "en", getLabel: () => "" },
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
// By following hook-rules we can able to use hooks either custom hooks or Functional components
// custom hook name should start with use
// Functional hook name should start with Capital latter
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

export { I18nProvider, useI18n, withI18n };
