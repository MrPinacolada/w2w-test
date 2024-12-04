export enum Department {
  Cardiology = 1,
  Surgery = 2,
}

export enum Role {
  Doctor = 1,
  Nurse = 2,
}

export const departmentTranslations: Record<Department, string> = {
  [Department.Cardiology]: "Кардиологическое",
  [Department.Surgery]: "Хирургическое",
};

export const roleTranslations: Record<Role, string> = {
  [Role.Doctor]: "Врач",
  [Role.Nurse]: "Медсестра",
};

export const getEnumTranslation = <T extends string | number | symbol>(
  value: T,
  translations: Record<T, string>
): string => {
  return translations[value] || "Неизвестное значение";
};
