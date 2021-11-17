import { TodosComponent } from "./todos/todos.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

export const routes = [
    {path : "user/:id", component:UserDetailsComponent},
    {path : "todos", component:TodosComponent}
]