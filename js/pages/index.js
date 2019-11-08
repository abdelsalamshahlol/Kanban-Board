/*
	=== Index Page ===
*/

var index = 
`	<h1 class="text-center headings-style mt-2 app-hero">Project Management</h1>
		<section id="home-section">
			<div class="container">
				<div class="row">
					<div class="col">
						 <div class="container">
						 	<div class="col" id="projects-list-home">
								<h2 class="mx-1 headings-style">Projects</h2>
								<div class="project mx-1">
									<div class="container">
										<div class="row">
											<a href="/project" data-name='project' class="kill-anchor">
												<div class="col-1">
													<span class="d-flex flex-center">
														<i class="fas fa-tasks"></i>
													</span>
												</div>
												<div class="col">
													<h3>Project Title</h3>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
													tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
													quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
													consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
													cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
													proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						 </div>
					</div>
					<div class="col">
						<div class="container">
							<div class="col">
								<h2 class="mx-1 headings-style">New Project</h2>
								<form id="create-new-project">
									<div class="form-control">
										<label>Project Title</label>
										<input class="input-field" type="text" name="project-name">
									</div>
									<div class="form-control">
										<label>Project Description <small>(Optional)</small></label>
										<textarea class="input-field"></textarea>
									</div>
									<button class="btn btn-blue mt-1">Save</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
	</section>`;