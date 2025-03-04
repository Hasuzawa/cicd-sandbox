resource "aws_ecr_repository" "ecr" {
  name = var.ecr_repo_name

  lifecycle {
    prevent_destroy = true
  }
}

data "aws_ecr_image" "image" {
  repository_name = var.ecr_repo_name
  most_recent     = true
}

output "image" {
  value = data.aws_ecr_image.image
}
