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

const PDFDamage = ({
  vs,
  vw,
  damage,
  result,
  percent,
  own,
  message,
}: PDFDamageParams) => (
  <PDFBase>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>Your data</Text>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>Insurance sum</Text>
        <Text style={pdfStyle.listItemRight}>
          {toOutString(Math.round(vs * 100 + Number.EPSILON) / 100) + " CHF"}
        </Text>
      </View>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>Insured value</Text>
        <Text style={pdfStyle.listItemRight}>
          {toOutString(Math.round(vw * 100 + Number.EPSILON) / 100) + " CHF"}
        </Text>
      </View>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>Damage</Text>
        <Text style={pdfStyle.listItemRight}>
          {toOutString(Math.round(damage * 100 + Number.EPSILON) / 100) +
            " CHF"}
        </Text>
      </View>
    </View>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>Calculations</Text>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>Compensation</Text>
        <Text style={pdfStyle.listItemRight}>
          {result != Math.PI
            ? toOutString(Math.round(result * 100 + Number.EPSILON) / 100) +
              " CHF"
            : ""}
        </Text>
      </View>
      <View style={pdfStyle.listItem}>
        <Text style={pdfStyle.listItemLeft}>Percentage coverage</Text>
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
        <Text style={pdfStyle.listItemLeft}>Excess</Text>
        <Text style={pdfStyle.listItemRight}>
          {own != Math.PI
            ? toOutString(Math.round(own * 100 + Number.EPSILON) / 100) + " CHF"
            : ""}
        </Text>
      </View>
    </View>
    <View style={pdfStyle.subSection}>
      <Text style={pdfStyle.title}>Comment</Text>
      <View style={pdfStyle.listItem}>
        <Text>{message}</Text>
      </View>
    </View>
  </PDFBase>
);

export default PDFDamage;
