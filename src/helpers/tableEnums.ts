enum Department {
  Cardiology = 1,
  Surgery = 2,
}

enum Role {
  Doctor = 1,
  Nurse = 2,
}

export const departmentTranslations: Record<Department, string> = {
  [Department.Cardiology]: "Кардиологическое",
  [Department.Surgery]: "Хирургическое",
};

export const doleTranslations: Record<Role, string> = {
  [Role.Doctor]: "Врач",
  [Role.Nurse]: "Медсестра",
};

export const getEnumTranslation = <T extends string | number | symbol>(
  value: T,
  translations: Record<T, string>
): string => {
  return translations[value] || "Неизвестное значение";
};
