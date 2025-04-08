// import React from "react";
// import CustomTable from "./CustomTable";
// import { columns, getData, MyData } from "./fixtures";

// const data = getData(10);

// const CustomDataGrid = () => {
//   return (
//     <CustomTable<MyData>
//       data={data}
//       columns={columns}
//       isEditVisible
//       isDeleteVisible
//       pageSize={10}
//       pageIndex={0}
//       pagesCount={3}
//       footerHeight={60}
//       onGotoPage={() => {}}
//       onPageSizeChange={() => {}}
//       onRowClick={() => {}}
//       onDeleteRow={() => {}}
//       onSortColumn={() => {}}
//       hasNextPage
//       onGoToNext={() => {
//         console.log("onGoToNext");
//       }}
//       hasPreviousPage
//       onGoToPrevious={() => {
//         console.log("onGoToPrevious");
//       }}
//     />
//   );
// };

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: "Data Grid",
//   component: CustomDataGrid,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   // argTypes: {
//   //   variant: { control: "variant" },
//   // },
// };

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <CustomDataGrid {...args} />;

// export const DataGrid = Template.bind({});
