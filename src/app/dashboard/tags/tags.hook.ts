/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getTagsColumns } from "./components/TagsColumns";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_URI } from "@/shared/utils";
import { useContext } from "react";
import { UserContext } from "@/shared/common/authentication";

export const useTagsHook = () => {
  const { t } = useTranslation("Store");
  const router = useRouter();
  const { token } = useContext(UserContext);

  const fetchTags = async () => {
    const response = await axios.get(`${SERVER_URI}/api/admin/tags`, {
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
    data: tagsData,
  } = useQuery({
    queryKey: ["adminTags"],
    queryFn: fetchTags,
    enabled: !!token,
  });

  const handleNavigateToNewPage = () => {
    router.push("tags/new");
  };

  const tableActionButtons = [
    {
      title: t("Create Tag"),
      buttonHandler: handleNavigateToNewPage,
    },
  ];

  return {
    tableActionButtons,
    columns: getTagsColumns(t),
    tagsData: tagsData?.data,
    isLoading,
    isError,
    isSuccess,
  };
};
