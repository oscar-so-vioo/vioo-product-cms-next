import Header, {HeaderProps} from "@app/(dashboard)/Header";


export default function Layout({children}) {

    const headerProps: HeaderProps = {
        header: 'Home',
        tabs: []
    }

    return (
        <>
            <Header props={headerProps}>{children}</Header>
        </>
    )
}
