import React from "react";
import { toOutString } from "@/utils/functions";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import PDFBase from "./PDFBase";
import content from "../../assets/text.json";
import { useRouter } from "next/router";
import { PDFSqrParams } from "@/types";

const pdfStyle = StyleSheet.create({
  subSection: {
    width: "100%",
  },
  title: {
    alignSelf: "flex-start",
    paddingTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    width: "100%",
    borderBottom: "2px solid #000",
  },
  items: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 5,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  itemTexts: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 2,
    alignItems: "center",
    gap: 5,
  },
  itemText: {
    fontSize: 12,
  },
  itemSmallText: {
    fontSize: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  itemValue: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 2,
  },
  total: {
    borderTop: "2px solid #000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  totalText: {
    fontFamily: "Helvetica-Bold",
    flex: 2,
  },
  totalValue: {
    fontFamily: "Helvetica-Bold",
    flex: 1,
    textAlign: "left",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 5,
  },
  listItemRight: {
    flex: 1,
    textAlign: "left",
  },
  listItemLeft: {
    flex: 2,
    textAlign: "left",
  },
});

const { locale } = useRouter();
let text = content.pdf.filter((p) => p.locale === locale)[0];

const PDFSqr = ({ squareMetres, flatRate, vs, vw }: PDFSqrParams) => (
  <PDFBase>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>{text.sqr.yourData}</Text>
      <View style={pdfStyle.items}>
        <View style={pdfStyle.listItem}>
          <Text style={pdfStyle.listItemLeft}>{text.sqr.sqrMeters}</Text>
          <Text style={pdfStyle.listItemRight}>
            {toOutString(Math.round(squareMetres * 100 + Number.EPSILON) / 100)}{" "}
            m&#0178;
          </Text>
        </View>
        <View style={pdfStyle.listItem}>
          <Text style={pdfStyle.listItemLeft}>{text.sqr.flatRate}</Text>
          <Text style={pdfStyle.listItemRight}>
            {toOutString(Math.round(flatRate * 100 + Number.EPSILON) / 100)} CHF
          </Text>
        </View>
      </View>
      <View style={pdfStyle.total}>
        <Text style={pdfStyle.totalText}>{text.sqr.total}</Text>
        <Text style={pdfStyle.totalValue}>
          {toOutString(Math.round(vw * 100 + Number.EPSILON) / 100)} CHF
        </Text>
      </View>
    </View>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>{text.sqr.result}</Text>
      <View style={pdfStyle.items}>
        <View style={pdfStyle.item}>
          <View style={pdfStyle.itemTexts}>
            <Text style={pdfStyle.itemText}>{text.sqr.vw}</Text>
            <Text style={pdfStyle.itemSmallText}>{text.sqr.vwSub}</Text>
          </View>
          <Text style={pdfStyle.itemValue}>
            {toOutString(Math.round(vw * 100 + Number.EPSILON) / 100)} CHF
          </Text>
        </View>
        <View style={pdfStyle.item}>
          <View style={pdfStyle.itemTexts}>
            <Text style={pdfStyle.itemText}>{text.sqr.vs}</Text>
            <Text style={pdfStyle.itemSmallText}>{text.sqr.vsSub}</Text>
          </View>
          <Text style={pdfStyle.itemValue}>
            {toOutString(Math.round(vs * 100 + Number.EPSILON) / 100)} CHF
          </Text>
        </View>
      </View>
    </View>
  </PDFBase>
);

export default PDFSqr;
