<?php require 'header.php'?>
<script>
    $(document).ready(function()
    {
          $(".editStudent").hide();

    });
</script>

    <div class="addStudent">
        <div class="container">
            <h1 class="text-center">Add New Student</h1>

            <form action="addStudent.php" method="POST" enctype="multipart/form-data">
            <div class="justify-content-center my-4">
                <div class="form-group row">
                    <label for="profile" class="col-lg-3">Profile</label>
                    <input type="file" class="form-control-file col-lg-7" id="profile" name="profile">
                </div>
                <div class="form-group row">

                    <label for="Name" class="col-lg-3">Name</label>
                    <input type="text" class="form-control col-lg-7" name="name" id="Name">
                </div>
                <div class="form-group row">

                    <label for="Email" class="col-lg-3">Email</label>
                    <input type="email" class="form-control col-lg-7" name="email" id="Email">
                </div>
                <div class="form-group row">

                    <label class="col-lg-3">Gender</label>
                    <div class="custom-control custom-radio">
                        <input type="radio" id="male" name="gender" class="custom-control-input" value="Male">
                        <label class="custom-control-label" for="male">Male</label>
                    </div>
                    <div class="custom-control custom-radio ml-4">
                        <input type="radio" id="female" name="gender" class="custom-control-input" value="Female">
                        <label class="custom-control-label" for="female">Female</label>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="textarea" class="col-lg-3">Address</label>
                    <textarea class="form-control col-lg-7" id="textarea" rows="3" name="address"></textarea>
                  </div>

            </div>

            <button class="btn btn-primary btn-block col-lg-10" type="submit">Save</button>
        </form>

    </div>



</div>


    <div class="editStudent">
        <div class="container">
            <h1 class="text-center">Edit Exiting Student</h1>


            <div class="justify-content-center my-4">
                <div class="form-group row">
                    <label for="eprofile" class="col-lg-3">Profile</label>
                    <input type="file" class="form-control-file col-lg-7" id="eprofile" accept="image/*">
                </div>
                <div class="form-group row">

                    <label for="ename" class="col-lg-3">Name</label>
                    <input type="text" class="form-control col-lg-7" id="ename">
                </div>
                <div class="form-group row">

                    <label for="eemail" class="col-lg-3">Email</label>
                    <input type="email" class="form-control col-lg-7" id="eemail">
                </div>
                <div class="form-group row">

                    <label class="col-lg-3">Gender</label>
                    <div class="custom-control custom-radio">
                        <input type="radio" id="emale" name="egender" class="custom-control-input">
                        <label class="custom-control-label" for="emale">Male</label>
                    </div>
                    <div class="custom-control custom-radio ml-4">
                        <input type="radio" id="female" name="egender" class="custom-control-input">
                        <label class="custom-control-label" for="efemale">Female</label>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="etextarea" class="col-lg-3">Address</label>
                    <textarea class="form-control col-lg-7" id="etextarea" rows="3"></textarea>
                  </div>

            </div>

            <div class="btn btn-primary btn-block col-lg-10">Update</div>

        </div>


    </div>
    <div class="container">
    <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>

            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Zaw Zaw Win</td>
            <td>Male</td>

            <td>zawzawwinucsl@gmail.com</td>
            <td>
            <button class="btn btn-success">Details</button>
             <button class="btn btn-primary">Edit</button>
             <button class="btn btn-danger">Delete</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
<?php require 'footer.php'?>
