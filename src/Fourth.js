import React from "react";
import { PermissionConsumer } from './PermissionContext';

export default () => (
    <PermissionConsumer name="fourth">
        <div>
            <button>Fourth</button>
        </div>
    </PermissionConsumer>
);