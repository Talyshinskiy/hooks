import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";

const CloneElementExample = () => {
    const field = <TextField label="email" name="email" />;

    const handleChange = (target) => {
        console.log("Change: ", target);
    };

    return (
        <CardWrapper>
            <SmallTitle>Instanse</SmallTitle>
            {field}
            {React.cloneElement(field, {
                onChange: handleChange,
                label: "Cloned email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
