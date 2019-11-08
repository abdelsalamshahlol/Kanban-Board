/*
	=== Project Page ===
*/

var projectTemplate = 
`
<section>
	<div class="container">
		<div class="row">
			<div class="col k-section bg-green no-gutter">
				<div class="section-title mx-1">
					<h2 class="text-center text-white">Back Log</h2>
					<hr class="mt-1 divider">
				</div>
				<div class="container">
					<div class="row flex-center-content">
						<form class="w-75 mt-1">
							<div class="form-input-grp">
								<input class="input-field add-task-field" placeholder="Task" type="text" name="task">
                           		<div class="input-grp-append">
									<button title="Add task to list" class="btn btn-blue add-task-btn">
										<i class="fas fa-plus-square"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="sticky-note mx-1">
					<div class="container">
						<div class="row">
							<a href="#" class="kill-anchor">
								<div class="col-1">
									<span class="d-flex flex-center flex-h-center h-100">
										<button titel="Delete task" class="btn btn-note-del"><i class="fas fa-trash-alt"></i></button>
									</span>
								</div>
								<div class="col">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="sticky-note mx-1">
					<div class="container">
						<div class="row">
							<a href="#" class="kill-anchor">
								<div class="col-1">
									<span class="d-flex flex-center flex-h-center h-100">
										<button titel="Delete task" class="btn btn-note-del"><i class="fas fa-trash-alt"></i></button>
									</span>
								</div>
								<div class="col">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col k-section bg-orange no-gutter">
				<div class="section-title mx-1">
					<h2 class="text-center text-white">Doing</h2>
					<hr class="mt-1 divider">
				</div>
				<div class="container">
					<div class="row flex-center-content">
						<form class="w-75 mt-1">
							<div class="form-input-grp">
								<input class="input-field add-task-field" placeholder="Task" type="text" name="task">
                           		<div class="input-grp-append">
									<button title="Add task to list" class="btn btn-blue add-task-btn">
										<i class="fas fa-plus-square"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>						
			</div>
			<div class="col k-section bg-brown no-gutter">
				<div class="section-title mx-1">
					<h2 class="text-center text-white">Done</h2>
					<hr class="mt-1 divider">
				</div>
				<div class="container">
					<div class="row flex-center-content">
						<form class="w-75 mt-1">
							<div class="form-input-grp">
								<input class="input-field add-task-field" placeholder="Task" type="text" name="task">
                           		<div class="input-grp-append">
									<button title="Add task to list" class="btn btn-blue add-task-btn">
										<i class="fas fa-plus-square"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>						
			</div>
		</div>
	</div>
</section>
`;