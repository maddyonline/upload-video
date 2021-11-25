import React from 'react';
import { setupDatGui } from './option_panel';
import { runApp } from './tf_utils';

export function MyApp() {
    const controlsUI = React.useRef(null);
    const gui = React.useRef(null);
    React.useEffect(() => {
        const initGui = async () => {
            if (controlsUI.current) {
                gui.current = await setupDatGui({ model: "movenet", autoPlace: false });
                controlsUI.current.appendChild(gui.current.domElement)
                await runApp();
            }
        };
        initGui()
    }, [controlsUI.current])
    return <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
            <div id="stats"></div>
            <div id="main">
                <div className="container">
                    <div id="top-bar">
                        <input type="file" id="videofile" name="video" accept="video/*" />
                        <button id="submit">Run</button>
                        <a id="frames-video" style={{ display: 'none' }}>Download Pose Video</a>
                        <a id="frames-json" style={{ display: 'none' }}>Download Pose Co-ordinates</a>
                    </div>
                </div>
                <div className="container" id="canvas-wrapper">
                    <canvas id="output"></canvas>
                    <video id="video">
                        <source id="currentVID" src="" type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <span id="status"></span>
                </div>
            </div>
        </div>
        <div style={{ display: "flex", flexDirection: 'column' }}>

            <div>Controls</div>
            <div ref={controlsUI} id="abc"></div>
        </div>
    </div>;
}