import { SimpleForm, Create, required, TextInput, Edit, SelectInput } from "react-admin";

export const CourseEdit = () => {
    return(
        <Edit>
            <SimpleForm>
                <TextInput source="id"  label="id" validate={[required()]}/>
                <TextInput source="title"  label="Title" validate={[required()]}/>
                <TextInput source="imageSrc"  label="Image" validate={[required()]}/>
                <SelectInput
                    source="type"
                    choices={[
                        {
                            id: "INTERNATIONAL",
                            name: "INTERNATIONAL",
                        },
                        {
                            id: "NATIVE",
                            name: "NATIVE",
                        },
                    ]}
                    validate={[required()]}
                />
            </SimpleForm>
        </Edit>
    );
};