import { SimpleForm, Edit, required, TextInput, NumberInput, ReferenceInput } from "react-admin";

export const UnitEdit = () => {
    return(
        <Edit>
            <SimpleForm>
                <NumberInput source="id" validate={[required()]}label="Id" />
                <TextInput source="title"  label="Title" validate={[required()]}/>
                <TextInput source="description"  label="Description" validate={[required()]}/>
                <ReferenceInput source="courseId" reference="courses" />
                <NumberInput source="order" validate={[required()]} label="Order" />
            </SimpleForm>
        </Edit>
    );
};