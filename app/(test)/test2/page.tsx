"use client"
import { inject, observer } from 'mobx-react';
import RootStore from "@stores/rootStore";

interface IProps {
    rootStore: RootStore;  // 這裡假設你的 rootStore 的型別為 RootStore
}
const Page = () => {
    const { rootStore } = useStores();

    return <h1>Hello, Test! Store state: {console.log(rootStore)}</h1>
}


export default observer(inject('rootStore')(Page));
