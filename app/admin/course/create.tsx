import { SimpleForm, Create, required, TextInput, SelectInput } from "react-admin";

export const CourseCreate = () => {
    return(
        <Create>
            <SimpleForm>
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
        </Create>
    );
};