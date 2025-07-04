// import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getCustomersColumns } from "./components/CustomersColumns";
import axios from "axios";
import { SERVER_URI } from "@/shared/utils";
import { useContext } from "react";
import { UserContext } from "@/shared/common/authentication";
import { useQuery } from "@tanstack/react-query";

export const useCustomersHook = () => {
  const { t } = useTranslation("Store");
  // const router = useRouter();
  const { token } = useContext(UserContext);

  const fetchCustomers = async () => {
    const response = await axios.get(`${SERVER_URI}/api/admin/users`, {
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
    data: customersData,
  } = useQuery({
    queryKey: ["adminUsers"],
    queryFn: fetchCustomers,
    enabled: !!token,
  });

  // const handleNavigateToNewPage = () => {
  //   router.push("customers/new");
  // };

  const tableActionButtons = [
    // {
    //   title: t("Create Customer"),
    //   buttonHandler: handleNavigateToNewPage,
    // },
  ];

  return {
    isError,
    isSuccess,
    isLoading,
    tableActionButtons,
    columns: getCustomersColumns(t),
    customersData: customersData?.data,
  };
};

// const customersDatad = {
//   data: [
//     {
//       id: 35,
//       email: "huda.bakheti@example.com",
//       username: "huda_bakheti",
//       status: "active",
//       created_at: "2025-03-07T13:00:44.000000Z",
//       updated_at: "2025-03-07T13:00:44.000000Z",
//       customer: {
//         first_name: "هدى",
//         last_name: "البخيتي",
//         phone: "967770000111",
//         address: "شارع الأربعين، حي المعافر",
//         city: "تعز",
//         postal_code: "40030",
//       },
//     },
//     {
//       id: 31,
//       email: "sara.ansi@example.com",
//       username: "sara_ansi",
//       status: "active",
//       created_at: "2025-03-07T13:00:43.000000Z",
//       updated_at: "2025-03-07T13:00:43.000000Z",
//       customer: {
//         first_name: "سارة",
//         last_name: "العنسي",
//         phone: "967776666777",
//         address: "شارع جمال، حي القبة",
//         city: "صنعاء",
//         postal_code: "36026",
//       },
//     },
//     {
//       id: 32,
//       email: "ziad.bahri@example.com",
//       username: "ziad_bahri",
//       status: "active",
//       created_at: "2025-03-07T13:00:43.000000Z",
//       updated_at: "2025-03-07T13:00:43.000000Z",
//       customer: {
//         first_name: "زياد",
//         last_name: "البحري",
//         phone: "967777777888",
//         address: "شارع 14 أكتوبر، حي المعلا",
//         city: "عدن",
//         postal_code: "37027",
//       },
//     },
//     {
//       id: 33,
//       email: "rana.shami@example.com",
//       username: "rana_shami",
//       status: "active",
//       created_at: "2025-03-07T13:00:43.000000Z",
//       updated_at: "2025-03-07T13:00:43.000000Z",
//       customer: {
//         first_name: "رنا",
//         last_name: "الشامي",
//         phone: "967778888999",
//         address: "شارع الميناء، حي الجامعة",
//         city: "الحديدة",
//         postal_code: "38028",
//       },
//     },
//     {
//       id: 34,
//       email: "basem.ansari@example.com",
//       username: "basem_ansari",
//       status: "active",
//       created_at: "2025-03-07T13:00:43.000000Z",
//       updated_at: "2025-03-07T13:00:43.000000Z",
//       customer: {
//         first_name: "باسم",
//         last_name: "الأنصاري",
//         phone: "967779999000",
//         address: "شارع صعدة، حي الحصبة",
//         city: "صنعاء",
//         postal_code: "39029",
//       },
//     },
//     {
//       id: 26,
//       email: "fatima.alawi@example.com",
//       username: "fatima_alawi",
//       status: "active",
//       created_at: "2025-03-07T13:00:42.000000Z",
//       updated_at: "2025-03-07T13:00:42.000000Z",
//       customer: {
//         first_name: "فاطمة",
//         last_name: "العلوي",
//         phone: "967771111222",
//         address: "شارع الستين، حي الجامعة",
//         city: "صنعاء",
//         postal_code: "31021",
//       },
//     },
//     {
//       id: 27,
//       email: "mohammed.naqeeb@example.com",
//       username: "mohammed_naqeeb",
//       status: "active",
//       created_at: "2025-03-07T13:00:42.000000Z",
//       updated_at: "2025-03-07T13:00:42.000000Z",
//       customer: {
//         first_name: "محمد",
//         last_name: "النقيب",
//         phone: "967772222333",
//         address: "شارع القيادة، حي التحرير",
//         city: "عدن",
//         postal_code: "32022",
//       },
//     },
//     {
//       id: 28,
//       email: "abdullah.hassani@example.com",
//       username: "abdullah_hassani",
//       status: "active",
//       created_at: "2025-03-07T13:00:42.000000Z",
//       updated_at: "2025-03-07T13:00:42.000000Z",
//       customer: {
//         first_name: "عبدالله",
//         last_name: "الحسني",
//         phone: "967773333444",
//         address: "شارع الزبيري، حي الروضة",
//         city: "تعز",
//         postal_code: "33023",
//       },
//     },
//     {
//       id: 29,
//       email: "reem.shaabi@example.com",
//       username: "reem_shaabi",
//       status: "active",
//       created_at: "2025-03-07T13:00:42.000000Z",
//       updated_at: "2025-03-07T13:00:42.000000Z",
//       customer: {
//         first_name: "ريم",
//         last_name: "الشعبي",
//         phone: "967774444555",
//         address: "شارع الخمسين، حي الجامعة",
//         city: "إب",
//         postal_code: "34024",
//       },
//     },
//     {
//       id: 30,
//       email: "osama.junaid@example.com",
//       username: "osama_junaid",
//       status: "active",
//       created_at: "2025-03-07T13:00:42.000000Z",
//       updated_at: "2025-03-07T13:00:42.000000Z",
//       customer: {
//         first_name: "أسامة",
//         last_name: "الجنيد",
//         phone: "967775555666",
//         address: "شارع الثورة، حي الحوض",
//         city: "عدن",
//         postal_code: "35025",
//       },
//     },
//     {
//       id: 22,
//       email: "saeed.qadi@example.com",
//       username: "saeed_qadi",
//       status: "active",
//       created_at: "2025-03-07T13:00:41.000000Z",
//       updated_at: "2025-03-07T13:00:41.000000Z",
//       customer: {
//         first_name: "سعيد",
//         last_name: "القاضي",
//         phone: "967777777888",
//         address: "شارع الشهداء، حي الدائري",
//         city: "عدن",
//         postal_code: "27017",
//       },
//     },
//     {
//       id: 23,
//       email: "layla.bakri@example.com",
//       username: "layla_bakri",
//       status: "active",
//       created_at: "2025-03-07T13:00:41.000000Z",
//       updated_at: "2025-03-07T13:00:41.000000Z",
//       customer: {
//         first_name: "ليلى",
//         last_name: "البكري",
//         phone: "967778888999",
//         address: "شارع 26 سبتمبر، حي الحوبان",
//         city: "تعز",
//         postal_code: "28018",
//       },
//     },
//     {
//       id: 24,
//       email: "mazen.humaidi@example.com",
//       username: "mazen_humaidi",
//       status: "active",
//       created_at: "2025-03-07T13:00:41.000000Z",
//       updated_at: "2025-03-07T13:00:41.000000Z",
//       customer: {
//         first_name: "مازن",
//         last_name: "الحميدي",
//         phone: "967779999000",
//         address: "شارع حدة، حي بيت بوس",
//         city: "صنعاء",
//         postal_code: "29019",
//       },
//     },
//     {
//       id: 25,
//       email: "samer.shaibani@example.com",
//       username: "samer_shaibani",
//       status: "active",
//       created_at: "2025-03-07T13:00:41.000000Z",
//       updated_at: "2025-03-07T13:00:41.000000Z",
//       customer: {
//         first_name: "سامر",
//         last_name: "الشيباني",
//         phone: "967770000111",
//         address: "شارع التحرير، حي الحديدة",
//         city: "الحديدة",
//         postal_code: "30020",
//       },
//     },
//     {
//       id: 18,
//       email: "khaled.yemeni@example.com",
//       username: "khaled_yemeni",
//       status: "active",
//       created_at: "2025-03-07T13:00:40.000000Z",
//       updated_at: "2025-03-07T13:00:40.000000Z",
//       customer: {
//         first_name: "خالد",
//         last_name: "اليمني",
//         phone: "967773333444",
//         address: "شارع المطار، حي الصافية",
//         city: "عدن",
//         postal_code: "23013",
//       },
//     },
//     {
//       id: 19,
//       email: "nada.kholani@example.com",
//       username: "nada_kholani",
//       status: "active",
//       created_at: "2025-03-07T13:00:40.000000Z",
//       updated_at: "2025-03-07T13:00:40.000000Z",
//       customer: {
//         first_name: "ندى",
//         last_name: "الخولاني",
//         phone: "967774444555",
//         address: "شارع الحصبة، حي شميلة",
//         city: "صنعاء",
//         postal_code: "24014",
//       },
//     },
//     {
//       id: 20,
//       email: "omar.kabsi@example.com",
//       username: "omar_kabsi",
//       status: "active",
//       created_at: "2025-03-07T13:00:40.000000Z",
//       updated_at: "2025-03-07T13:00:40.000000Z",
//       customer: {
//         first_name: "عمر",
//         last_name: "الكبسي",
//         phone: "967775555666",
//         address: "شارع بير باشا، حي المطار",
//         city: "تعز",
//         postal_code: "25015",
//       },
//     },
//     {
//       id: 21,
//       email: "eman.ghafari@example.com",
//       username: "eman_ghafari",
//       status: "active",
//       created_at: "2025-03-07T13:00:40.000000Z",
//       updated_at: "2025-03-07T13:00:40.000000Z",
//       customer: {
//         first_name: "إيمان",
//         last_name: "الغفاري",
//         phone: "967776666777",
//         address: "شارع الزراعة، حي التحرير",
//         city: "إب",
//         postal_code: "26016",
//       },
//     },
//     {
//       id: 14,
//       email: "tariq.adini@example.com",
//       username: "tariq_adini",
//       status: "active",
//       created_at: "2025-03-07T13:00:39.000000Z",
//       updated_at: "2025-03-07T13:00:39.000000Z",
//       customer: {
//         first_name: "طارق",
//         last_name: "العديني",
//         phone: "967779012345",
//         address: "شارع الأربعين، حي صالة",
//         city: "تعز",
//         postal_code: "19009",
//       },
//     },
//     {
//       id: 15,
//       email: "hana.wasabi@example.com",
//       username: "hana_wasabi",
//       status: "active",
//       created_at: "2025-03-07T13:00:39.000000Z",
//       updated_at: "2025-03-07T13:00:39.000000Z",
//       customer: {
//         first_name: "هناء",
//         last_name: "الوصابي",
//         phone: "967770123456",
//         address: "شارع صبر، حي الروضة",
//         city: "مأرب",
//         postal_code: "20010",
//       },
//     },
//     {
//       id: 16,
//       email: "ahmed.dabie@example.com",
//       username: "ahmed_dabie",
//       status: "active",
//       created_at: "2025-03-07T13:00:39.000000Z",
//       updated_at: "2025-03-07T13:00:39.000000Z",
//       customer: {
//         first_name: "أحمد",
//         last_name: "الدبعي",
//         phone: "967771111222",
//         address: "شارع الحديدة، حي الجامعة",
//         city: "إب",
//         postal_code: "21011",
//       },
//     },
//     {
//       id: 17,
//       email: "mona.qasemi@example.com",
//       username: "mona_qasemi",
//       status: "active",
//       created_at: "2025-03-07T13:00:39.000000Z",
//       updated_at: "2025-03-07T13:00:39.000000Z",
//       customer: {
//         first_name: "منى",
//         last_name: "القاسمي",
//         phone: "967772222333",
//         address: "شارع تعز، حي النهضة",
//         city: "صنعاء",
//         postal_code: "22012",
//       },
//     },
//     {
//       id: 10,
//       email: "nabil.habishi@example.com",
//       username: "nabil_habishi",
//       status: "active",
//       created_at: "2025-03-07T13:00:38.000000Z",
//       updated_at: "2025-03-07T13:00:38.000000Z",
//       customer: {
//         first_name: "نبيل",
//         last_name: "الحبيشي",
//         phone: "967775678901",
//         address: "شارع السلام، حي المظفر",
//         city: "إب",
//         postal_code: "15005",
//       },
//     },
//     {
//       id: 11,
//       email: "amal.thabhani@example.com",
//       username: "amal_thabhani",
//       status: "active",
//       created_at: "2025-03-07T13:00:38.000000Z",
//       updated_at: "2025-03-07T13:00:38.000000Z",
//       customer: {
//         first_name: "أمل",
//         last_name: "الذبحاني",
//         phone: "967776789012",
//         address: "شارع الخمسين، حي المعبر",
//         city: "ذمار",
//         postal_code: "16006",
//       },
//     },
//     {
//       id: 12,
//       email: "jamal.saqqaf@example.com",
//       username: "jamal_saqqaf",
//       status: "active",
//       created_at: "2025-03-07T13:00:38.000000Z",
//       updated_at: "2025-03-07T13:00:38.000000Z",
//       customer: {
//         first_name: "جمال",
//         last_name: "السقاف",
//         phone: "967777890123",
//         address: "شارع الميناء، حي الشيخ عثمان",
//         city: "عدن",
//         postal_code: "17007",
//       },
//     },
//     {
//       id: 13,
//       email: "ruaa.shamiri@example.com",
//       username: "ruaa_shamiri",
//       status: "active",
//       created_at: "2025-03-07T13:00:38.000000Z",
//       updated_at: "2025-03-07T13:00:38.000000Z",
//       customer: {
//         first_name: "رؤى",
//         last_name: "الشميري",
//         phone: "967778901234",
//         address: "شارع الزبيري، حي شعوب",
//         city: "صنعاء",
//         postal_code: "18008",
//       },
//     },
//     {
//       id: 6,
//       email: "yousef.badani@example.com",
//       username: "yousef_badani",
//       status: "active",
//       created_at: "2025-03-07T13:00:37.000000Z",
//       updated_at: "2025-03-07T13:00:37.000000Z",
//       customer: {
//         first_name: "يوسف",
//         last_name: "البعداني",
//         phone: "967771234567",
//         address: "شارع الستين، حي السبعين",
//         city: "صنعاء",
//         postal_code: "11001",
//       },
//     },
//     {
//       id: 7,
//       email: "arwa.zubaidi@example.com",
//       username: "arwa_zubaidi",
//       status: "active",
//       created_at: "2025-03-07T13:00:37.000000Z",
//       updated_at: "2025-03-07T13:00:37.000000Z",
//       customer: {
//         first_name: "أروى",
//         last_name: "الزبيدي",
//         phone: "967772345678",
//         address: "شارع التحرير، حي كريتر",
//         city: "عدن",
//         postal_code: "12002",
//       },
//     },
//     {
//       id: 8,
//       email: "muath.ansi@example.com",
//       username: "muath_ansi",
//       status: "active",
//       created_at: "2025-03-07T13:00:37.000000Z",
//       updated_at: "2025-03-07T13:00:37.000000Z",
//       customer: {
//         first_name: "معاذ",
//         last_name: "الآنسي",
//         phone: "967773456789",
//         address: "شارع جمال، حي القاهرة",
//         city: "تعز",
//         postal_code: "13003",
//       },
//     },
//     {
//       id: 9,
//       email: "samira.mikhlafi@example.com",
//       username: "samira_mikhlafi",
//       status: "active",
//       created_at: "2025-03-07T13:00:37.000000Z",
//       updated_at: "2025-03-07T13:00:37.000000Z",
//       customer: {
//         first_name: "سميرة",
//         last_name: "المخلافي",
//         phone: "967774567890",
//         address: "شارع صنعاء، حي الحالي",
//         city: "الحديدة",
//         postal_code: "14004",
//       },
//     },
//     {
//       id: 2,
//       email: "saleh.awlaqi@example.com",
//       username: "saleh_awlaqi",
//       status: "active",
//       created_at: "2025-03-07T13:00:36.000000Z",
//       updated_at: "2025-03-07T13:00:36.000000Z",
//       admin: {
//         name: "صالح العولقي",
//       },
//     },
//     {
//       id: 3,
//       email: "ammar.sharabi@example.com",
//       username: "ammar_sharabi",
//       status: "active",
//       created_at: "2025-03-07T13:00:36.000000Z",
//       updated_at: "2025-03-07T13:00:36.000000Z",
//       admin: {
//         name: "عمار الشرعبي",
//       },
//     },
//     {
//       id: 4,
//       email: "balqees.maqtari@example.com",
//       username: "balqees_maqtari",
//       status: "active",
//       created_at: "2025-03-07T13:00:36.000000Z",
//       updated_at: "2025-03-07T13:00:36.000000Z",
//       admin: {
//         name: "بلقيس المقطري",
//       },
//     },
//     {
//       id: 5,
//       email: "hamdan.aghbari@example.com",
//       username: "hamdan_aghbari",
//       status: "active",
//       created_at: "2025-03-07T13:00:36.000000Z",
//       updated_at: "2025-03-07T13:00:36.000000Z",
//       admin: {
//         name: "همدان الأغبري",
//       },
//     },
//     {
//       id: 1,
//       email: "abdulmalik.homairi@example.com",
//       username: "abdulmalik_homairi",
//       status: "active",
//       created_at: "2025-03-07T13:00:35.000000Z",
//       updated_at: "2025-03-07T13:00:35.000000Z",
//       admin: {
//         name: "عبدالملك الحميري",
//       },
//     },
//   ],
// };
