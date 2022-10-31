"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const YoutubeEmbeded_1 = __importDefault(require("../Elements/YoutubeEmbeded"));
const Home = () => {
    return <div className="home">
        <YoutubeEmbeded_1.default embedId='km9Il_-FHjw'/>
    </div>;
};
exports.default = Home;
