import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer";

const pdfStyle = StyleSheet.create({
  main: {
    marginHorizontal: 40,
    marginBottom: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  header: {
    height: "30%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  headerImage: {
    height: 75,
    transform: "translate(-15px, -15px)",
  },
  headerAddress: {
    height: "30%",
  },
  headerAddressTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  headerAddressText: {
    fontSize: 10,
  },
  headerAddressEmail: {
    fontSize: 10,
  },
  headerAddressLinks: {
    fontSize: 10,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  section: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 50,
  },
  waterMark: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "1%",
    left: 1,
    right: 1,
    bottom: 1,
    zIndex: -1,
    opacity: 0.1,
    transform: "rotate(-45deg)",
  },
});

type PDFBaseProps = {
  children: JSX.Element | JSX.Element[];
};

const PDFBase = ({ children }: PDFBaseProps) => {
  return (
    <Document>
      <Page size="A4">
        <View style={pdfStyle.waterMark}>
          <Image src="./Logo-big-light-transparent.png" />
        </View>
        <View style={pdfStyle.main}>
          <View style={pdfStyle.header}>
            <Image
              src="./Logo-big-light-transparent.png"
              style={pdfStyle.headerImage}
            />
            <View style={pdfStyle.headerAddress}>
              <Text style={pdfStyle.headerAddressTitle}>Banyard.tech</Text>
              <Text style={pdfStyle.headerAddressText}>Ael Elliot Banyard</Text>
              <Text style={pdfStyle.headerAddressEmail}>
                ael.banyard@gmail.com
              </Text>
              <View style={pdfStyle.headerAddressLinks}>
                <Link src="https://github.com/AelElliotBanyard">GitHub</Link>
                <Link src="https://www.banyard.tech">Website</Link>
              </View>
            </View>
          </View>
          <View style={pdfStyle.section}>{children}</View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFBase;
