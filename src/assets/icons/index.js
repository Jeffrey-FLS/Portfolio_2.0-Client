import React from "react";

// Local Icons
import typescript from './typescript.svg';

// FontAwesome Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faJsSquare,
    faHtml5,
    faSass,
    faAngular
} from "@fortawesome/free-brands-svg-icons";


const localIcons = {
    typescript: typescript
};

const jsxFontAwesomeIcon = (icon) => {
    return <FontAwesomeIcon icon={icon} className="icon-detail_-_icon" size='5x'/>
};

const jsxImageIcon = (iconName) => {
    return <img src={localIcons[iconName]}  alt={`${iconName}-icon`}/>
};

const temp = {};

// Mapping Icons
const icons = {
    angular: jsxFontAwesomeIcon(faAngular),
    angularfire: jsxFontAwesomeIcon(temp),
    angularjs: jsxFontAwesomeIcon(temp),
    angular_material: jsxFontAwesomeIcon(temp),
    arduino: jsxFontAwesomeIcon(temp),
    autocad: jsxFontAwesomeIcon(temp),
    avocode: jsxFontAwesomeIcon(temp),
    aws: jsxFontAwesomeIcon(temp),
    bash: jsxFontAwesomeIcon(temp),
    bootstrap: jsxFontAwesomeIcon(temp),
    c: jsxFontAwesomeIcon(temp),
    c_plus: jsxFontAwesomeIcon(temp),
    c_sharp: jsxFontAwesomeIcon(temp),
    chrome_developer_tools: jsxFontAwesomeIcon(temp),
    circuitry: jsxFontAwesomeIcon(temp),
    css: jsxFontAwesomeIcon(temp),
    django: jsxFontAwesomeIcon(temp),
    docker: jsxFontAwesomeIcon(temp),
    eaglecad: jsxFontAwesomeIcon(temp),
    eclipseide: jsxFontAwesomeIcon(temp),
    excel: jsxFontAwesomeIcon(temp),
    expo: jsxFontAwesomeIcon(temp),
    expressjs: jsxFontAwesomeIcon(temp),
    figma: jsxFontAwesomeIcon(temp),
    firebase: jsxFontAwesomeIcon(temp),
    flask: jsxFontAwesomeIcon(temp),
    foundation_css: jsxFontAwesomeIcon(temp),
    fritzing: jsxFontAwesomeIcon(temp),
    git: jsxFontAwesomeIcon(temp),
    google_analytics: jsxFontAwesomeIcon(temp),
    grunt: jsxFontAwesomeIcon(temp),
    gulp: jsxFontAwesomeIcon(temp),
    html: jsxFontAwesomeIcon(faHtml5),
    java: jsxFontAwesomeIcon(temp),
    javascript: jsxFontAwesomeIcon(faJsSquare),
    jetbrains: jsxFontAwesomeIcon(temp),
    jquery: jsxFontAwesomeIcon(temp),
    json: jsxFontAwesomeIcon(temp),
    laravel: jsxFontAwesomeIcon(temp),
    linux: jsxFontAwesomeIcon(temp),
    material_ui: jsxFontAwesomeIcon(temp),
    materialize_css: jsxFontAwesomeIcon(temp),
    mysql: jsxFontAwesomeIcon(temp),
    nodejs: jsxFontAwesomeIcon(temp),
    nodemcu: jsxFontAwesomeIcon(temp),
    nosql: jsxFontAwesomeIcon(temp),
    oop: jsxFontAwesomeIcon(temp),
    pc_building: jsxFontAwesomeIcon(temp),
    photoshop: jsxFontAwesomeIcon(temp),
    php: jsxFontAwesomeIcon(temp),
    postgre_sql: jsxFontAwesomeIcon(temp),
    powerpoint: jsxFontAwesomeIcon(temp),
    printing_3d: jsxFontAwesomeIcon(temp),
    pugjs: jsxFontAwesomeIcon(temp),
    python: jsxFontAwesomeIcon(temp),
    raspberry_pi: jsxFontAwesomeIcon(temp),
    react: jsxFontAwesomeIcon(temp),
    react_native: jsxFontAwesomeIcon(temp),
    repertier: jsxFontAwesomeIcon(temp),
    robotics: jsxFontAwesomeIcon(temp),
    ruby: jsxFontAwesomeIcon(temp),
    ruby_on_rails: jsxFontAwesomeIcon(temp),
    rubymine: jsxFontAwesomeIcon(temp),
    rxjs: jsxFontAwesomeIcon(temp),
    scss: jsxFontAwesomeIcon(faSass),
    sinatra: jsxFontAwesomeIcon(temp),
    soldering: jsxFontAwesomeIcon(temp),
    sql: jsxFontAwesomeIcon(temp),
    typescript: jsxImageIcon('typescript'),
    ubuntu: jsxFontAwesomeIcon(temp),
    vagrant: jsxFontAwesomeIcon(temp),
    virtualbox: jsxFontAwesomeIcon(temp),
    vscode: jsxFontAwesomeIcon(temp),
    vuejs: jsxFontAwesomeIcon(temp),
    webpack: jsxFontAwesomeIcon(temp),
    webstorm: jsxFontAwesomeIcon(temp),
    worm: jsxFontAwesomeIcon(temp),
    zeplin: jsxFontAwesomeIcon(temp)
};

export default icons;