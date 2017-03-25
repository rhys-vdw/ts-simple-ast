﻿import * as ts from "typescript";
import {Node} from "./../common";
import {NamedNode, ExportableNode, AmbientableNode, DocumentationableNode, TypeParameteredNode} from "./../base";
import {MethodDeclaration} from "./MethodDeclaration";
import {PropertyDeclaration} from "./PropertyDeclaration";

export const ClassDeclarationBase = TypeParameteredNode(DocumentationableNode(AmbientableNode(ExportableNode(NamedNode(Node)))));
export class ClassDeclaration extends ClassDeclarationBase<ts.ClassDeclaration> {
    /**
     * Gets the class method declarations.
     */
    getMethodDeclarations(): MethodDeclaration[] {
        return this.node.members.filter(m => m.kind === ts.SyntaxKind.MethodDeclaration)
            .map(m => this.factory.getMethodDeclaration(m as ts.MethodDeclaration));
    }

    getPropertyDeclarations(): PropertyDeclaration[] {
        return this.node.members.filter(m => m.kind === ts.SyntaxKind.PropertyDeclaration)
            .map(m => this.factory.getPropertyDeclaration(m as ts.PropertyDeclaration));
    }
}
