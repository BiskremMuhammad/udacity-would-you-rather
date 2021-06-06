import React from "react";

export enum QuestionTabs {
  ANSWERED_QUESTIONS = "Answered Questions",
  UNANSWERED_QUESTIONS = "Unanswered Questions",
}

interface PanelTabsProps {
  activeTab: QuestionTabs;
  onChangeTab: (tab: QuestionTabs) => void;
}

export const PanelTabs = ({ activeTab, onChangeTab }: PanelTabsProps) => {
  return (
    <div className="panel-tabs">
      <div
        className={
          activeTab === QuestionTabs.UNANSWERED_QUESTIONS ? "active" : ""
        }
        onClick={() => onChangeTab(QuestionTabs.UNANSWERED_QUESTIONS)}
      >
        {QuestionTabs.UNANSWERED_QUESTIONS}
      </div>
      <div
        className={
          activeTab === QuestionTabs.ANSWERED_QUESTIONS ? "active" : ""
        }
        onClick={() => onChangeTab(QuestionTabs.ANSWERED_QUESTIONS)}
      >
        {QuestionTabs.ANSWERED_QUESTIONS}
      </div>
    </div>
  );
};
