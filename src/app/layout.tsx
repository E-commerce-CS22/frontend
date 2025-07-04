// import type { Metadata } from "next";
import "./globals.css";
import { AppThemeProvider } from "@/shared/customization/AppThemeProvider";
import { LayoutComponent } from "@/shared/components/LayoutComponent/LayoutComponent";
import { UserContextProvider } from "@/shared/common/authentication";
import { TranslationsProvider } from "@/shared/common/providers/TranslationsProvider.component";
import { ReactQueryProvider } from "@/shared/common/providers/ReactQueryProvider.component";
import { Metadata } from "next";

// import { Metadata } from "next";
// import Layout from "@/shared/components/Layout/Layout";

export const metadata: Metadata = {
  title: "Smart Store",
  description: "Smart Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        {/*  className={`${geistSans.variable} ${geistMono.variable}`}*/}
        <TranslationsProvider>
          <AppThemeProvider>
            <ReactQueryProvider>
              <UserContextProvider>
                <LayoutComponent>{children}</LayoutComponent>
              </UserContextProvider>
            </ReactQueryProvider>
          </AppThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
