// create Manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>John</h3>
                            <h4>Manager</h4><i class="material-icons">content_paste</i>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: 5675</p>
                            <p class="email">Email: <a href="mailto:john@gmail.com">john@gmail.com</a></p>
                            <p class="office">Office Number: 34</p>
                        </div>

                    </div>
                </div>
    `
};


// create Engineer card

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>Nicole</h3>
                            <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: 4324</p>
                            <p class="email">Email: <a href="mailto:nicole.elisaw@gmail.com">nicole.elisaw@gmail.com</a>
                            </p>
                            <p class="github">Github: <a href="https://github.com/nicolewallace09">nicolewallace09</a>
                            </p>
                        </div>

                    </div>
                </div>
    `
};


// create Intern card

const generateIntern = function(intern){
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h3>Michael</h3>
                            <h4>Intern</h4><i class="material-icons">assignment_ind</i>
                        </div>

                        <div class="card-body">
                            <p class="id">ID: 3223</p>
                            <p class="email">Email:<a href="mailto:michael@gmail.com">michael@gmail.com</a></p>
                            <p class="school">School: UCLA</p>
                        </div>
                    </div>
                </div>`
}