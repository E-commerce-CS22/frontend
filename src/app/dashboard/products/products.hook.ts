import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getProductsColumns } from "./components/ProductsColumns";
import { useContext } from "react";
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProductsHook = () => {
  const { t } = useTranslation("Store");
  const router = useRouter();

  const { token } = useContext(UserContext);

  const fetchProducts = async () => {
    const response = await axios.get(`${SERVER_URI}/api/admin/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const {
    isPending: isLoading,
    isError,
    isSuccess,
    data: productData,
  } = useQuery({
    queryKey: ["adminProducts"],
    queryFn: fetchProducts,
    enabled: !!token,
  });

  const handleNavigateToNewPage = () => {
    router.push("products/new");
  };

  const tableActionButtons = [
    {
      title: t("Create product"),
      buttonHandler: handleNavigateToNewPage,
    },
  ];

  return {
    isLoading,
    isSuccess,
    isError,
    tableActionButtons,
    columns: getProductsColumns(t),
    productData: productData,
  };
};

// const productData = {
//   products: [
//     {
//       name: "هاتف ذكي سامسونج جالاكسي S24",
//       description:
//         "<p><strong>هاتف ذكي</strong> بأداء عالي، مزود بشاشة <em>Dynamic AMOLED</em> وكاميرا احترافية.</p><ul><li>شاشة 6.8 إنش</li><li>كاميرا ثلاثية 50 ميجابكسل</li><li>بطارية تدوم طويلًا</li></ul>",
//       price: 3500,
//       discount_type: "percentage",
//       discount_value: 10,
//       status: "active",
//       discount_start_date: "2025-03-01",
//       discount_end_date: "2025-03-10",
//       variants: [
//         {
//           color: "أسود",
//           memory: "256GB",
//           ram: "12GB",
//           image: "https://example.com/images/s24-black-256gb.jpg",
//         },
//         {
//           color: "فضي",
//           memory: "512GB",
//           ram: "16GB",
//           image: "https://example.com/images/s24-silver-512gb.jpg",
//         },
//       ],
//       categories: {
//         id: 1,
//         name: "هواتف ذكية",
//       },
//       tags: ["جوالات", "سامسونج", "أحدث الهواتف"],
//     },
//     {
//       name: "لابتوب ديل XPS 15",
//       description:
//         "<p><strong>لابتوب احترافي</strong> بأداء فائق، مثالي للأعمال والتصميم.</p><ul><li>معالج Intel Core i9</li><li>شاشة 4K OLED</li><li>هيكل من الألمنيوم</li></ul>",
//       price: 8000,
//       discount_type: "fixed",
//       discount_value: 500,
//       status: "active",
//       discount_start_date: "2025-03-05",
//       discount_end_date: "2025-03-20",
//       variants: [
//         {
//           color: "أسود",
//           memory: "1TB SSD",
//           ram: "32GB",
//           image: "https://example.com/images/xps15-black-1tb.jpg",
//         },
//         {
//           color: "فضي",
//           memory: "512GB SSD",
//           ram: "16GB",
//           image: "https://example.com/images/xps15-silver-512gb.jpg",
//         },
//       ],
//       categories: {
//         id: 2,
//         name: "أجهزة الكمبيوتر وملحقاتها",
//       },
//       tags: ["لابتوب", "ديل", "أداء عالي"],
//     },
//     {
//       name: "ساعة ذكية أبل واتش 9",
//       description:
//         "<p><strong>ساعة ذكية</strong> بأحدث الميزات الصحية والرياضية.</p><ul><li>شاشة Retina</li><li>مستشعرات صحية متطورة</li><li>عمر بطارية يصل إلى 24 ساعة</li></ul>",
//       price: 2000,
//       discount_type: "percentage",
//       discount_value: 5,
//       status: "active",
//       discount_start_date: "2025-03-10",
//       discount_end_date: "2025-03-15",
//       variants: [
//         {
//           color: "ذهبي",
//           size: "41mm",
//           image: "https://example.com/images/apple-watch-gold-41mm.jpg",
//         },
//         {
//           color: "فضي",
//           size: "45mm",
//           image: "https://example.com/images/apple-watch-silver-45mm.jpg",
//         },
//       ],
//       categories: {
//         id: 3,
//         name: "ساعات وإكسسوارات",
//       },
//       tags: ["ساعة ذكية", "أبل", "أحدث التقنيات"],
//     },
//     {
//       name: "سماعات أذن لاسلكية سوني WF-1000XM5",
//       description:
//         "<p><strong>سماعات لاسلكية</strong> بإلغاء ضوضاء فعال وجودة صوت احترافية.</p><ul><li>إلغاء ضوضاء نشط</li><li>عمر بطارية يصل إلى 8 ساعات</li><li>تصميم مريح وخفيف الوزن</li></ul>",
//       price: 1200,
//       discount_type: "fixed",
//       discount_value: 100,
//       status: "active",
//       discount_start_date: "2025-03-12",
//       discount_end_date: "2025-03-18",
//       variants: [
//         {
//           color: "أسود",
//           image: "https://example.com/images/sony-wf1000xm5-black.jpg",
//         },
//         {
//           color: "أبيض",
//           image: "https://example.com/images/sony-wf1000xm5-white.jpg",
//         },
//       ],
//       categories: {
//         id: 4,
//         name: "إلكترونيات",
//       },
//       tags: ["سماعات", "سوني", "إلغاء الضوضاء"],
//     },
//     {
//       name: "كاميرا كانون EOS R6",
//       description:
//         "<p><strong>كاميرا احترافية</strong> لمصوري الفيديو والتصوير الفوتوغرافي.</p><ul><li>مستشعر 20 ميجابكسل</li><li>تصوير فيديو 4K</li><li>تركيز تلقائي سريع</li></ul>",
//       price: 9500,
//       discount_type: "percentage",
//       discount_value: 7,
//       status: "active",
//       discount_start_date: "2025-03-15",
//       discount_end_date: "2025-03-25",
//       variants: [
//         {
//           color: "أسود",
//           lens: "24-105mm",
//           image: "https://example.com/images/canon-eosr6-24-105mm.jpg",
//         },
//         {
//           color: "أسود",
//           lens: "50mm",
//           image: "https://example.com/images/canon-eosr6-50mm.jpg",
//         },
//       ],
//       categories: {
//         id: 5,
//         name: "إلكترونيات",
//       },
//       tags: ["كاميرا", "كانون", "تصوير احترافي"],
//     },
//   ],
// };
