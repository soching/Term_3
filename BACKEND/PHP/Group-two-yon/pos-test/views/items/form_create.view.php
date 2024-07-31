<!-- Begin Page Content -->
<div class="container-fluid">

    <!-- DataTales Example -->
    <div class="card shadow p-5 ">
<form action="controllers/items/create_item_controller.php" method ="POST">
  <div class="form-group">
    <label for="title">Title:</label>
    <input type="text" class="form-control" name ="title">
  </div>
  <div class="form-group">
    <label for="desc">Description:</label>
    <textarea name="description" class="form-control"></textarea>
  </div>
  <div class="form-group form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>