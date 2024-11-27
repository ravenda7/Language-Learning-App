import { SimpleForm, Create, required, TextInput, NumberInput, ReferenceInput } from "react-admin";

export const LessonCreate = () => {
    return(
        <Create>
            <SimpleForm>
                <TextInput source="title"  label="Title" validate={[required()]}/>
                <ReferenceInput source="unitId" reference="units" />
                <NumberInput source="order" validate={[required()]} label="Order" />
            </SimpleForm>
        </Create>
    );
};