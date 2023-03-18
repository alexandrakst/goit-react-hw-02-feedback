import React from "react";
import { StatParagraph } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad , total, positivePercentage}) => {
    return (
        <div>
            <StatParagraph>Good: { good }</StatParagraph>
            <StatParagraph>Neutral: { neutral }</StatParagraph>
            <StatParagraph>Bad: { bad }</StatParagraph>
            <StatParagraph>Total: { total }</StatParagraph>
            <StatParagraph>Positive feedback: { positivePercentage } %</StatParagraph>
        </div> )
}
