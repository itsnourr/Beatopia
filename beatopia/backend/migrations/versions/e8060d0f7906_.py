"""empty message

Revision ID: e8060d0f7906
Revises: dfdca5af67f2
Create Date: 2024-12-20 19:32:05.370113

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e8060d0f7906'
down_revision = 'dfdca5af67f2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('mixes', schema=None) as batch_op:
        batch_op.add_column(sa.Column('file_path', sa.String(length=255), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('mixes', schema=None) as batch_op:
        batch_op.drop_column('file_path')

    # ### end Alembic commands ###
