export interface LanguageContextProps {
  language: string;
  translations: Record<string, Translations>;
  changeLanguage: (newLanguage: string) => void;
}
export interface LanguageProviderProps {
  children: React.ReactNode;
}

export interface Translations {
  description_text: string;
  description_text_1: string;
  description_text_2: string;
  description_text_3: string;
  description_text_4: string;
  description_text_5: string;
  description_text_6: string;
  title: string;
  title_span: string;
  title_1: string;
  signOut: string;
  welcome: string;
  main: string;
  signIn: string;
  signup: string;
  course_description_title: string;
  course_description_text: string;
  course_description_text_1: string;
  course_description_text_2: string;
  course_description_text_3: string;
  course_description_text_4: string;
  course_description_text_5: string;
  course_description_text_6: string;
  course_description_text_7: string;
  course_description_text_8: string;
  about_description_text: string;
  about_description_text_2: string;
  about_description_text_3: string;
  about_title: string;
  about_title_span: string;
  form_login_title: string;
  email: string;
  password: string;
  submit_login: string;
  submit_login_2: string;
  firstname: string;
  submit: string;
  submit_2: string;
  back_sign_in: string;
  now: string;
  alert_registration: string;
  validacia_password: string;
  validation_name: string;
  digit: string;
  lowercase: string;
  uppercase: string;
  simbol: string;
  variables: string;
  headers: string;
  execute: string;
}
