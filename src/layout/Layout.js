import Header from "./header/Header";

const Layout = (props) => {
    return (
        <>
            <Header />
            { props.children }
        </>
    )
};
export default Layout