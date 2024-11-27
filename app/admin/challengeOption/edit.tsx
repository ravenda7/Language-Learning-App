import { SimpleForm, Edit, required, TextInput, ReferenceInput, BooleanInput } from "react-admin";

export const ChallengeOptionEdit = () => {
    return(
        <Edit>
            <SimpleForm>
                <TextInput source="text"  label="Text" validate={[required()]}/>
                <BooleanInput
                    source="correct"
                    label="Correct option"
                />
                <ReferenceInput source="challengeId" reference="challenges" />
                <TextInput source="imageSrc" label="Image URL" />
                <TextInput source="audioSrc" label="Audio URL" />
            </SimpleForm>
        </Edit>
    );
};