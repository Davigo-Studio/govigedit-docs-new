import React from "react";

export function UnityAsset({ children, iconType }) {
    var iconSrc = `/img/icons/${iconType}.png`;
    
    return <span style={{height: '1em'}}><img src={iconSrc} style={{height: '1em', verticalAlign:"bottom", paddingRight:".2em"}}/> {children}</span>;
}