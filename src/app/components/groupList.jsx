import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    onItemSelect,
    valueProperty,
    contentProperty,
    selectedItem
}) => {
    const checkType = () => {
        if (typeof items === "object") {
            return Object.keys({ ...items });
        } else if (Array.isArray(items)) {
            return items;
        }
    };

    return (
        <ul className="list-group">
            {checkType().map((item) => (
                <li
                    role="button"
                    className={
                        "list-group-item" +
                        (selectedItem === items[item] ? " active" : "")
                    }
                    onClick={() => onItemSelect(items[item])}
                    key={items[item][valueProperty]}
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onItemSelect: PropTypes.func.isRequired,
    valueProperty: PropTypes.string,
    contentProperty: PropTypes.string,
    selectedItem: PropTypes.object
};

export default GroupList;
