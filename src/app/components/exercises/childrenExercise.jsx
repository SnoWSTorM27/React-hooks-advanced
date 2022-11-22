import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return <div>{number} Компонент списка</div>;
};
Component.propTypes = {
    number: PropTypes.number
};

const ComponentsList = ({ children }) => {
    const countChildren = React.Children.count(children);
    if (!countChildren) {
        return <div className="wrapper"><div>Нет элементов</div></div>;
    }

    return (
        <div className="wrapper">
            {React.Children.map(children, (child, index) => {
                if (child.type === Component) {
                    return React.cloneElement(child, { number: index + 1 });
                }
                return null;
            })}
        </div>
    );
};
ComponentsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ChildrenExercise;
