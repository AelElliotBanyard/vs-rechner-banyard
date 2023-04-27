import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { toOutString } from "@/utils/functions";
import PDFBase from "./PDFBase";
import content from "../../assets/text.json";
import { useRouter } from "next/router";
import { PDFDamageParams } from "@/types";

const pdfStyle = StyleSheet.create({
  subSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

const PDFDamage = ({
  vs,
  vw,
  schaden,
  result,
  percent,
  own,
  message,
}: PDFDamageParams) => (
  <PDFBase>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>{text.damage.data}</Text>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>{text.damage.vs}</Text>
        <Text style={pdfStyle.listItemRight}>
          {toOutString(Math.round(vs * 100 + Number.EPSILON) / 100) + " CHF"}
        </Text>
      </View>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>{text.damage.vw}</Text>
        <Text style={pdfStyle.listItemRight}>
          {toOutString(Math.round(vw * 100 + Number.EPSILON) / 100) + " CHF"}
        </Text>
      </View>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>{text.damage.damage}</Text>
        <Text style={pdfStyle.listItemRight}>
          {toOutString(Math.round(schaden * 100 + Number.EPSILON) / 100) +
            " CHF"}
        </Text>
      </View>
    </View>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>{text.damage.calcs}</Text>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>{text.damage.compensation}</Text>
        <Text style={pdfStyle.listItemRight}>
          {result != Math.PI
            ? toOutString(Math.round(result * 100 + Number.EPSILON) / 100) +
              " CHF"
            : ""}
        </Text>
      </View>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>{text.damage.percent}</Text>
        <Text
          style={[
            pdfStyle.listItemRight,
            percent < 100 ? { color: "red" } : { color: "green" },
          ]}
        >
          {percent != Math.PI
            ? Math.round(percent * 100 + Number.EPSILON) / 100 + "%"
            : ""}
        </Text>
      </View>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>{text.damage.excess}</Text>
        <Text style={pdfStyle.listItemRight}>
          {own != Math.PI
            ? toOutString(Math.round(own * 100 + Number.EPSILON) / 100) + " CHF"
            : ""}
        </Text>
      </View>
    </View>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>{text.damage.comment}</Text>
      <View style={pdfStyle.listItem}>
        <Text>{message}</Text>
      </View>
    </View>
  </PDFBase>
);

export default PDFDamage;
