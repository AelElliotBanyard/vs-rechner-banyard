import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { toOutString } from "@/utils/functions";
import PDFBase from "./PDFBase";
import content from "../../assets/text.json";
import { useRouter } from "next/router";
import { Item, PDFVsSummeParams } from "@/types";

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
  },
  totalValue: {
    fontFamily: "Helvetica-Bold",
  },
});

const { locale } = useRouter();
let text = content.pdf.filter((p) => p.locale === locale)[0];

const PDFVsSumme = ({ items, vw, vs }: PDFVsSummeParams) => (
  <PDFBase>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>{text.vsSumme.yourList}</Text>
      <View style={pdfStyle.items}>
        {items.map((item: Item, index: number) => (
          <View key={index} style={pdfStyle.item}>
            <Text>{item.gegenstand}</Text>
            <Text>
              {toOutString(Math.round(item.wert * 100 + Number.EPSILON) / 100)}{" "}
              CHF
            </Text>
          </View>
        ))}
      </View>
      <View style={pdfStyle.total}>
        <Text style={pdfStyle.totalText}>{text.vsSumme.total}</Text>
        <Text style={pdfStyle.totalValue}>
          {toOutString(Math.round(vw * 100 + Number.EPSILON) / 100)} CHF
        </Text>
      </View>
    </View>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>{text.vsSumme.result}</Text>
      <View style={pdfStyle.items}>
        <View style={pdfStyle.item}>
          <View style={pdfStyle.itemTexts}>
            <Text style={pdfStyle.itemText}>{text.vsSumme.vw}</Text>
            <Text style={pdfStyle.itemSmallText}>{text.vsSumme.vwSub}</Text>
          </View>
          <Text style={pdfStyle.itemValue}>
            {toOutString(Math.round(vw * 100 + Number.EPSILON) / 100)} CHF
          </Text>
        </View>
        <View style={pdfStyle.item}>
          <View style={pdfStyle.itemTexts}>
            <Text style={pdfStyle.itemText}>{text.vsSumme.vs}</Text>
            <Text style={pdfStyle.itemSmallText}>{text.vsSumme.vsSub}</Text>
          </View>
          <Text style={pdfStyle.itemValue}>
            {toOutString(Math.round(vs * 100 + Number.EPSILON) / 100)} CHF
          </Text>
        </View>
      </View>
    </View>
  </PDFBase>
);

export default PDFVsSumme;
