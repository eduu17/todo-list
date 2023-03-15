import React, { Component } from "react";
import { Button, ButtonDelete, Container, Form, Task } from "./app.styled";

export default class App extends Component {
	state = {
		tarefa: "",
		listaTarefa: [{ name: "msia", id: 1 }],
	};

	handlerTarefa = (event) => {
		this.setState({
			tarefa: event.target.value,
		});
	};

	addTarefa = () => {
		if (this.state.tarefa) {
			this.setState({
				listaTarefa: [
					...this.state.listaTarefa,
					{ name: this.state.tarefa, id: Math.random() },
				],
				tarefa: "",
			});
		}
	};

	removeTarefa = (idTask) => {
		this.setState({
			listaTarefa: this.state.listaTarefa.filter(({ id }) => id !== idTask),
		});
	};

	render() {
		return (
			<Container>
				<h1>Todo list</h1>

				<Form>
					<input
						type="text"
						onChange={this.handlerTarefa}
						value={this.state.tarefa}
						placeholder="Adicione uma tarefa"
					/>
					<Button onClick={this.addTarefa} type="button">
						Add
					</Button>
				</Form>

				<ul>
					{this.state.listaTarefa[0] ? (
						this.state.listaTarefa.map((tarefa) => {
							return (
								<Task key={tarefa.id}>
									<span>{tarefa.name}</span>
									<ButtonDelete onClick={() => this.removeTarefa(tarefa.id)}>
										Remover
									</ButtonDelete>
								</Task>
							);
						})
					) : (
						<h2>🎉 Sem Tarefas 🎉</h2>
					)}
				</ul>
			</Container>
		);
	}
}
