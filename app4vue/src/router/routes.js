// Views
// Devices
/*const Devices = resolve => {
    require.ensure(["../pages/devices/Devices.vue"], () => {
        resolve(require("../pages/devices/Devices.vue"));
    });
};
const DevicesMain = resolve => {
    require.ensure(["../pages/devices/DevicesMain.vue"], () => {
        resolve(require("../pages/devices/DevicesMain.vue"));
    });
};
const Device = resolve => {
    require.ensure(["../pages/devices/Device.vue"], () => {
        resolve(require("../pages/devices/Device.vue"));
    });
};
const DeviceCreate = resolve => {
    require.ensure(["../pages/devices/DeviceCreate.vue"], () => {
        resolve(require("../pages/devices/DeviceCreate.vue"));
    });
};
const DeviceEdit = resolve => {
    require.ensure(["../pages/devices/DeviceEdit.vue"], () => {
        resolve(require("../pages/devices/DeviceEdit.vue"));
    });
};
const DeviceSensor = resolve => {
    require.ensure(["../pages/devices/DeviceSensor.vue"], () => {
        resolve(require("../pages/devices/DeviceSensor.vue"));
    });
};*/
const Test = resolve => {
    require.ensure(["../pages/Test.vue"], () => {
        resolve(require("../pages/Test.vue"));
    });
};

const Test2 = resolve => {
    require.ensure(["../pages/Test2.vue"], () => {
        resolve(require("../pages/Test2.vue"));
    });
};

const Root = resolve => {
    require.ensure(["../pages/Root.vue"], () => {
        resolve(require("../pages/Root.vue"));
    });
};

export const routes = [
    {
        path: "/",
        name: "root",
        component: Root,
    },
    {
        path: "/test",
        name: "test",
        component: Test,
    },
    {
        path: "/test2",
        name: "test2",
        component: Test2,
    }/*,
    {
        path: "/devices",
        name: "devices",
        component: Devices,
        children: [
            {
                path: "/devices",
                component: DevicesMain,
                children: [
                    {
                        path: "/devices/create",
                        name: "klink-add-devices",
                        component: DeviceCreate,
                        props: true
                    },
                    {
                        path: "/devices/edit/:id",
                        name: "klink-edit-devices",
                        component: DeviceEdit,
                        props: true
                    },
                    {
                        path: "/devices/sensor/:id",
                        name: "klink-sensor-devices",
                        component: DeviceSensor,
                        props: true
                    }
                ]
            },
            {
                path: "/devices/:id",
                name: "device",
                component: Device
            }
        ]
    }*/
];
