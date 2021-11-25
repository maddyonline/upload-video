import React from 'react';
import { setupDatGui } from './option_panel';

export function MyApp() {
    const controlsUI = React.useRef(null);
    const gui = React.useRef(null);
    React.useEffect(() => {
        const initGui = async () => {
            if (controlsUI.current) {
                gui.current = await setupDatGui({ model: "movenet", autoPlace: false });
                controlsUI.current.appendChild(gui.current.domElement)
            }
        };
        initGui()
    }, [controlsUI.current])
    return <div>
        <div style={{ display: "flex", flexDirection: 'column' }}>

            <div>Hello world!</div>
            <div ref={controlsUI} id="abc"></div>
        </div>
    </div>;
}