import { Datagrid, List, TextField, SelectField } from "react-admin";

export const CourseList = () => {
    return(
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="title"/>
                <TextField source="imageSrc"/>
                <SelectField
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
                />
            </Datagrid>
        </List>
    );
};