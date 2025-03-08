import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getCategoriesColumns } from "./components/CategoriesColumns";

export const useCategoriesHook = () => {
  const { t } = useTranslation("Store");
  const router = useRouter();

  const handleNavigateToNewPage = () => {
    router.push("categories/new");
  };

  const tableActionButtons = [
    {
      title: t("Create Category"),
      buttonHandler: handleNavigateToNewPage,
    },
  ];

  return {
    tableActionButtons,
    columns: getCategoriesColumns(t),
    categoriesData: categoriesData.data,
  };
};

const categoriesData = {
  data: [
    {
      id: 1,
      name: "تقنية المعلومات",
      description: "كل ما يتعلق بتكنولوجيا المعلومات والحوسبة والبرمجة",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 2,
      name: "الإلكترونيات",
      description:
        "أجهزة إلكترونية مثل الهواتف الذكية، والحواسيب، والأجهزة اللوحية",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 3,
      name: "الأجهزة المنزلية",
      description: "معدات منزلية مثل الغسالات، والثلاجات، والمكيفات",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 4,
      name: "الموضة والأزياء",
      description: "ملابس وأحذية وإكسسوارات للرجال والنساء",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 5,
      name: "الجمال والعناية الشخصية",
      description: "منتجات العناية بالبشرة والشعر ومستحضرات التجميل",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 6,
      name: "الرياضة واللياقة",
      description: "معدات رياضية وملابس للتمارين واللياقة البدنية",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 7,
      name: "الكتب والمجلات",
      description: "كتب وروايات ومجلات بمختلف المجالات",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 8,
      name: "الأطفال والرضع",
      description: "ملابس وألعاب ومنتجات للعناية بالأطفال والرضع",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 9,
      name: "الإكسسوارات والمجوهرات",
      description: "أطقم إكسسوارات وساعات ومجوهرات",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 10,
      name: "السيارات وملحقاتها",
      description: "قطع غيار السيارات والإكسسوارات",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 11,
      name: "أجهزة الألعاب",
      description: "أجهزة تشغيل الألعاب وإكسسواراتها",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 12,
      name: "الصحة والعناية الطبية",
      description: "أجهزة طبية ومنتجات للعناية الصحية",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 13,
      name: "المطبخ والأدوات المنزلية",
      description: "أدوات المطبخ مثل الأواني وأجهزة الطبخ",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 14,
      name: "السفر والرحلات",
      description: "معدات السفر وحقائب الرحلات",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 15,
      name: "الألعاب والهوايات",
      description: "ألعاب وهوايات مثل الألغاز والمجسمات",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 16,
      name: "الحدائق والنباتات",
      description: "منتجات للزراعة والعناية بالحدائق",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 17,
      name: "الحيوانات الأليفة",
      description: "منتجات للعناية بالحيوانات الأليفة",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 18,
      name: "الأدوات المكتبية",
      description: "لوازم مكتبية وأدوات للكتابة",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 19,
      name: "الأثاث والديكور",
      description: "قطع أثاث وديكورات منزلية",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 20,
      name: "التعليم والتدريب",
      description: "دورات تدريبية ومنتجات تعليمية",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
    {
      id: 21,
      name: "الأعمال اليدوية",
      description: "مواد وأدوات للحرف اليدوية",
      color: null,
      created_at: "2025-03-07T13:00:44.000000Z",
      updated_at: "2025-03-07T13:00:44.000000Z",
    },
  ],
};
