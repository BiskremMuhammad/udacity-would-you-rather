import React from "react";

interface PanelTitleProps {
  caption?: string;
  title: string;
}

export const PanelTitle = ({ caption, title }: PanelTitleProps) => (
  <div className="panel-title">
    <h2>{title}</h2>
    {caption && <p>{caption}</p>}
  </div>
);
