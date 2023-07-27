import Header, {HeaderProps} from "@app/(dashboard)/Header";


export default function AuthenticationLayout({children}) {

    const headerProps: HeaderProps = {
        header: 'Authentication',
        tabs: [
            {
                label: 'Users',
                path: '/authentication/users'
            },
            {
                label: 'Usage',
                path: '/authentication/usage'
            }
        ]
    }

    return (
        <>
            <Header props={headerProps}>{children}</Header>
        </>
    )
}
