import { SimpleForm, Edit, required, TextInput, NumberInput, ReferenceInput } from "react-admin";

export const LessonEdit = () => {
    return(
        <Edit>
            <SimpleForm>
                <TextInput source="title"  label="Title" validate={[required()]}/>
                <ReferenceInput source="unitId" reference="units" />
                <NumberInput source="order" validate={[required()]} label="Order" />
            </SimpleForm>
        </Edit>
    );
};