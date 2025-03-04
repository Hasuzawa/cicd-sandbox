resource "aws_ecr_repository" "ecr" {
  name = var.ecr_repo_name

  lifecycle {
    prevent_destroy = true
  }
}

data "aws_ecr_image" "shop" {
  repository_name = var.ecr_repo_name
  most_recent     = true
}

variable "ecr_repo_name" {
  type    = string
  default = "dev-images"
}
