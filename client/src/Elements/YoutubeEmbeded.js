"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const YoutubeEmbeded = (props) => {
    return (<div className="youtubeEmbeded">
        <iframe width="853" height="480" src={`https://www.youtube.com/embed/${props.embedId}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube"/>
    </div>);
};
exports.default = YoutubeEmbeded;
