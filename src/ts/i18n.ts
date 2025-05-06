// src/i18n.ts
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  fallbackLng: "pl",
  resources: {
    en: {
      translation: {
        signInToYourAccount: "Sign in to your account",
        emailAddress: "Email address",
        email: "Email",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        signIn: "Sign In",
        dontHaveAccount: "Don’t have an account?",
        signUp: "Sign up",
        welcomeBack: "Welcome Back 👋",
        accessDashboard:
          "Access your dashboard by logging in or create a new account.",
        login: "Login",
        register: "Register",
        fullName: "Full Name",
        close: "Close",
        noAccount: "No Account?",
        welcomeTitle: "Welcome to",
        welcomeSubtitle:
          "Experience a modern and professional platform built just for you.",
        dusatuGroup: "DUSATU GROUP",
        chooseDesign: "Choose a Design",
        loginDesign1: "Login Design 1",
        loginRegisterDesign2: "Login Register Design 2",
        landingLoginModalDesign3: "Landing Login Modal Design 3",
        alreadyHaveAccount: "Already have an account?",
      },
    },
    pl: {
      translation: {
        signInToYourAccount: "Zaloguj się na swoje konto",
        emailAddress: "Adres e-mail",
        email: "E-mail",
        password: "Hasło",
        rememberMe: "Zapamiętaj mnie",
        forgotPassword: "Zapomniałeś hasła?",
        signIn: "Zaloguj się",
        dontHaveAccount: "Nie masz konta?",
        signUp: "Zarejestruj się",
        welcomeBack: "Witaj ponownie 👋",
        accessDashboard:
          "Uzyskaj dostęp do swojego panelu logując się lub tworząc nowe konto.",
        login: "Zaloguj się",
        register: "Zarejestruj się",
        fullName: "Imię i nazwisko",
        close: "Zamknij",
        noAccount: "Nie masz konta?",
        welcomeTitle: "Witaj w",
        welcomeSubtitle:
          "Doświadcz nowoczesnej i profesjonalnej platformy stworzonej specjalnie dla Ciebie.",
        dusatuGroup: "DUSATU GROUP",
        chooseDesign: "Wybierz projekt",
        loginDesign1: "Projekt logowania 1",
        loginRegisterDesign2: "Projekt rejestracji logowania 2",
        landingLoginModalDesign3: "Projekt logowania na stronie głównej 3",
        alreadyHaveAccount: "Masz już konto?",
      },
    },
  },
});

export default i18n;
