import { SimpleForm, Edit, required, TextInput, NumberInput, ReferenceInput, SelectInput } from "react-admin";

export const ChallengeEdit = () => {
    return(
        <Edit>
            <SimpleForm>
                <TextInput source="question"  label="Question" validate={[required()]}/>
                <SelectInput
                    source="type"
                    choices={[
                        {
                            id: "SELECT",
                            name: "SELECT",
                        },
                        {
                            id: "ASSIST",
                            name: "ASSIST",
                        },
                    ]}
                    validate={[required()]}
                />
                <ReferenceInput source="lessonId" reference="lessons" />
                <NumberInput source="order" validate={[required()]} label="Order" />
            </SimpleForm>
        </Edit>
    );
};